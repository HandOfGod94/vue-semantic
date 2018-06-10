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
    this.errorRule = (errorRule)? errorRule: (x: any) => false
    this.editRule = (editRule)? editRule: (x: any) => false
    this.warnRule = (warnRule)? warnRule: (x: any) => false
    this.editableColumns = (editableColumns)? editableColumns: [],
    this.colDataType = (colDataType)? colDataType: []
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
   * @param {any} val String of header/key
   * @returns `true` if editRule satisfies or if column is editable, `false` otherwise
   */
  isEditable(val: any): boolean {
    if (Object.keys(val).length > 0)
      return this.editRule(val) || this.editableColumns.includes(Object.keys(val)[0])
    return this.editRule(val)
  }
}