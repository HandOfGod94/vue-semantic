export default interface IMetadata {
  errorRule: Function;
  warnRule: Function;
  editRule: Function;

  hasError(val: any): boolean;
  hasWarning(val: any): boolean;
  isEditable(val: string): boolean;

}