const validation = (input) => {
  const errors = {};

  if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  } else if (!/^.{1,20}$/.test(input.name)) {
    errors.name = "El nombre debe contener máximo 20 caracteres";
  }

  if (!input.image) {
    errors.image = "Debe ingresar una imagen";
  } else if (!/^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif)$/.test(input.image)) {
    errors.image = "La imagen debe ser de tipo jpg, jpeg, png o gif";
  }

  if (!input.life_span) {
    errors.life_span = "Debe ingresar el tiempo de vida";
  }

  if (!input.height) {
    errors.height = "Debe ingresar el tamaño";
  } else if (!/^\d+$/.test(input.height)) {
    errors.height = "El tamaño solo puede contener números";
  }

  if (!input.weight) {
    errors.weight = "Debe ingresar el peso";
  } else if (!/^\d+$/.test(input.weight)) {
    errors.weight = "El peso solo puede contener números";
  }

  if (!input.temperament || input.temperament.length === 0) {
    errors.temperament = "Debe ingresar al menos un Temperamento";
  }

  return errors;
};

export default validation;