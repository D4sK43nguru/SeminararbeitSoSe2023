import {sha256} from "js-sha256";
import base64url from "base64url";

const secret = "geheimer-Schlüssel"

const header = {
	"alg": "HS256",
	"typ": "JWT"
}
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
const signature = sha256.hmac(
	secret,
	base64url(header) + '.' +
	base64url(payload)
)

const token = base64url(header) + '.' + base64url(payload) + '.' + base64url(signature)