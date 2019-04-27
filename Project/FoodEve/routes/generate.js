const TokenGenerator = require('uuid-token-generator');

exports.generateToken = () => {
    const tokgen = new TokenGenerator();
    var access_token = tokgen.generate();
    return access_token;
}
