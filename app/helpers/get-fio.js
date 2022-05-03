import { helper } from '@ember/component/helper';

export function getFio(params/*, hash*/) {
  let [firstName, lastName, patronymic] = params;
  return `${lastName} ${firstName} ${patronymic}`;
}

export default helper(getFio);
