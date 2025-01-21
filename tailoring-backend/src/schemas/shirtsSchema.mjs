const shirtSchema = {
  id: {
    notEmpty: {
      errorMessage: "id must not be empty",
    },
    isNumeric: {
      errorMessage: "id must be a number",
    },
  },
  userId: {
    notEmpty: {
      errorMessage: "userId must not be empty",
    },
    isNumeric: {
      errorMessage: "userId must be a number",
    },
  },
  gender: {
    notEmpty: {
      errorMessage: "gender must not be empty",
    },
    isString: {
      errorMessage: "gender must be a string",
    },
  },
  collar: {
    notEmpty: {
      errorMessage: "collar must not be empty",
    },
    isNumeric: {
      errorMessage: "collar must be a number",
    },
  },
  chest: {
    notEmpty: {
      errorMessage: "chest must not be empty",
    },
    isNumeric: {
      errorMessage: "chest must be a number",
    },
  },
  Waist: {
    notEmpty: {
      errorMessage: "waist must not be empty",
    },
    isNumeric: {
      errorMessage: "waist must be a number",
    },
  },

  front_length: {
    notEmpty: {
      errorMessage: "front-lenght must not be empty",
    },
    isNumeric: {
      errorMessage: "front-lenght must be a number",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "description must not be empty",
    },
    isString: {
      errorMessage: "decription must be a string",
    },
    isLength: {
      options: { min: 3 },
      errorMessage: "description must be atleast 3 characters",
    },
  },
};

export default shirtSchema;
