import { ChangeEvent } from 'react';

export function onChangeDateInput(
  event: ChangeEvent<HTMLInputElement>,
  callback: (date: Date) => void,
) {
  const date = new Date(event.target.value);

  callback(date);
}
