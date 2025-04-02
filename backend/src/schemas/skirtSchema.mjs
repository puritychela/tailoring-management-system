const skirtSchema = {
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
  hips: {
    notEmpty: {
      errorMessage: "hips must not be empty",
    },
    isNumeric: {
      errorMessage: "hips must be a number",
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

  skirt_length: {
    notEmpty: {
      errorMessage: "skirt-lenght must not be empty",
    },
    isNumeric: {
      errorMessage: "skirt-lenght must be a number",
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

export default skirtSchema;
