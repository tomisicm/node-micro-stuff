import { User } from "#root/db/models";
// import generateUUID from "#root/helpers/generateUUID";
// import hashPassword from "#root/helpers/hashPassword";
import comparePassword from "#root/helpers/comparePassword";

import { config } from "#root/helpers/config";

import jwt from "jsonwebtoken";

export const newToken = user => {
  return jwt.sign(
    { id: user.id, email: user.email },
    config.secrets.jwt,
    {
      expiresIn: config.secrets.jwtExp
    }
  );
};

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

// export const register = async (req, res) => {
//   const value = req.parsed;

//   try {
//     const user = await User.create(value);
//     const token = newToken(user);
//     return res.status(201).send({ token });
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// };

export const login = async (req, res) => {
  let user;

  try {
    user = await User.findOne({
      where: { 
        email: req.body.email
      },
      raw: true
    });

    if (!user) {
      return res.status(401).send({
        errors: {
          email: {
            message: "Invalid email and passoword combination"
          }
        }
      });
    }

    const match = await comparePassword(req.body.password, user.passwordHash);

    if (!match) {
      return res.status(401).send({
        errors: {
          email: {
            message: "Invalid email and passoword combination"
          }
        }
      });
    }

    delete(user.passwordHash);
    const token = newToken(user);

    return res.status(201).send({ 
      user: user, 
      token: { access_token: token, token_type:"JWT", expiresIn: config.secrets.jwtExp  }
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

export const authenticationMiddleware = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (bearer && bearer.startsWith("Bearer ")) {
    const token = bearer.split("Bearer ")[1].trim();
    let payload;

    try {
      payload = await verifyToken(token);
    } catch (e) {
      return res.status(401).send(e);
    }

    let user = await User.findByPk(payload.id).then(function (user) {
      return user.dataValues
    });

    if (!user) {
      return res.status(401).end();
    }

    req.user = user;

    next();
  }

  return res.status(403).end();
};
