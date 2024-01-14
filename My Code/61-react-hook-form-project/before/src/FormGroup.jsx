export function FormGroup({ errorHandler = "", children }) {
  return (
    <div className={`form-group ${errorHandler.length > 0 ? "error" : ""}`}>
      {children}
      {errorHandler.length > 0 && <div className="msg">{errorHandler}</div>}
    </div>
  )
}
