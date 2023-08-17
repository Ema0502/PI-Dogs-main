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
  } else if (parseInt(input.life_span) > 35){
    errors.height = "El tamaño debe ser menor a 35";
  }

  if (!input.height) {
    errors.height = "Debe ingresar el tamaño";
  } else if (!/^\d+$/.test(input.height)) {
    errors.height = "El tamaño solo puede contener números";
  } else if (parseInt(input.height) > 90){
    errors.height = "El tamaño debe ser menor a 90";
  }

  if (!input.weight) {
    errors.weight = "Debe ingresar el peso";
  } else if (!/^\d+$/.test(input.weight)) {
    errors.weight = "El peso solo puede contener números";
  } else if (parseInt(input.weight) > 70) {
    errors.weight = "El peso debe ser menor a 70";
  }

  if (!input.temperament || input.temperament.length === 0) {
    errors.temperament = "Debe ingresar al menos un Temperamento";
  } else if (/\d/.test(input.temperament)) {
    errors.temperament = "Solo puedes agregar caracteres";
  } else if (!/^.{1,100}$/.test(input.temperament)) {
    errors.name = "El nombre debe contener máximo 100 caracteres";
  }

  return errors;
};

export default validation;