const dressSchema = {
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
  collar: {
    notEmpty: {
      errorMessage: "collar must not be empty",
    },
    isNumeric: {
      errorMessage: "collar must be a number",
    },
  },
  bust: {
    notEmpty: {
      errorMessage: "bust must not be empty",
    },
    isNumeric: {
      errorMessage: "bust must be a number",
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

  shoulder: {
    notEmpty: {
      errorMessage: "full-lenght must not be empty",
    },
    isNumeric: {
      errorMessage: "full-lenght must be a number",
    },
  },
  sleeve_length: {
    notEmpty: {
      errorMessage: "sleeve-lenght must not be empty",
    },
    isNumeric: {
      errorMessage: "sleeve-lenght must be a number",
    },
  },
  shoulder: {
    notEmpty: {
      errorMessage: "shoulder must not be empty",
    },
    isNumeric: {
      errorMessage: "shoulder must be a number",
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

export default dressSchema;
