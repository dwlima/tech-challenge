class ExternalError extends Error {
  constructor(message, dependency) {
    super(message);
    this.name = 'Erro externo';
    this.dependency = dependency;
    this.msg = message;
  }
}

module.exports = ExternalError;
