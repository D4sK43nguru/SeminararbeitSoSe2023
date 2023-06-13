const header = {
	"alg": "HS256",
	"typ": "JWT"
}
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
const signature = HMAC_SHA(
	secret,
	base64urlEncoding(header) + '.' + 
	base64urlEncoding(payload)
)

const token = base64urlEncodingheader + '.' + base64urlEncoding(payload + '.' base64urlEncoding(signature)