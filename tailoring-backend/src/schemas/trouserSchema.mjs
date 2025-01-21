const trouserSchema = {
  id: {
    notEmpty: {
      errorMessage: "userId must not be empty",
    },
    isNumeric: {
      errorMessage: "userId must be a number",
    },
  },
  kneel: {
    notEmpty: {
      errorMessage: "kneel must not be empty",
    },
    isNumeric: {
      errorMessage: "kneel must be a number",
    },
  },
  thigh: {
    notEmpty: {
      errorMessage: "thigh must not be empty",
    },
    isNumeric: {
      errorMessage: "thigh must be a number",
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

  hips: {
    notEmpty: {
      errorMessage: "hips must not be empty",
    },
    isNumeric: {
      errorMessage: "hips must be a number",
    },
  },
  height: {
    notEmpty: {
      errorMessage: "height must not be empty",
    },
    isNumeric: {
      errorMessage: "height must be a number",
    },
  },
  leg_opening: {
    notEmpty: {
      errorMessage: "leg_opening must not be empty",
    },
    isNumeric: {
      errorMessage: "leg_opening must be a number",
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

export default trouserSchema;
