export function stringValue(value: any) {
  if (typeof value !== "string") {
    return JSON.stringify(value);
  }

  return value;
}
