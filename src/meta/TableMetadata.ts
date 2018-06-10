import IMetadata from './IMetadata'

export default class TableMetadata implements IMetadata {
  errorRule: Function;
  warnRule: Function;
  editRule: Function;
  editableColumns: Array<string>;
  colDataType: Array<string>;

  constructor({errorRule, warnRule, editRule, editableColumns, colDataType}:{
    errorRule: Function,
    warnRule: Function,
    editRule: Function,
    editableColumns: Array<string>,
    colDataType: Array<string>
  }) {
    this.errorRule = errorRule
    this.editRule = editRule
    this.warnRule = warnRule
    this.editableColumns = editableColumns
    this.colDataType = colDataType
  }

  hasError(val: any): boolean {
    return this.errorRule(val)
  }

  hasWarning(val: any): boolean {
    return this.warnRule(val)
  }

  /**
   * Header or key passed to this function will be evaluated against
   * editRule.
   * The result is true if editRule results in true or if it is editable
   * column
   * @param val String of header/key
   * @returns `true` if editRule satisfies or if column is editable, `false` otherwise
   */
  isEditable(val: string): boolean {
    return this.isEditable(val) || this.editableColumns.indexOf(val) > 0
  }
}