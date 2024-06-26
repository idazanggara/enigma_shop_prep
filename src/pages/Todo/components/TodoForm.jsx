import { IconRefresh } from '@tabler/icons-react'
import { IconDeviceFloppy } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'

// yg dikirim
// method:
// - handleSubmit
// - handleChange
// - handleChangeStatus
// -
// state:
// - form
// - errors
export default class TodoForm extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleChangeStatus,
      clearForm,
      form,
      errors,
    } = this.props
    return (
      <form onSubmit={handleSubmit} className="shadow-sm p-4 rounded-2">
        <h3>Form Todo</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Tugas</label>
          <input
            onChange={handleChange}
            value={form.task}
            type="text" className={`form-control ${errors.task && "is-invalid"}`}
            id="task" placeholder="Tugas yg berat dan kita kesana dengan seorang anak" name="task"
          />
          {/* validasi */}
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Tugas wajib di isi!.
          </div>

        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Deskripsi</label>
          <textarea
            onChange={handleChange}
            value={form.description}

            className={`form-control ${errors.description && "is-invalid"}`}
            id="description" rows="3" name="description"
          >
          </textarea>
          {/* validasi */}
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Deskripsi wajib di isi!.
          </div>
        </div>
        <div className="form-check">
          <input
            onChange={handleChangeStatus}
            checked={form.status}
            className="form-check-input" type="checkbox" id="status" name='status' />
          <label className="form-check-label" htmlFor="status">
            Selesai
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button type="submit" className="btn btn-primary"> <i><IconDeviceFloppy /></i> Submit</button>
          <button type="reset" className="btn btn-secondary" onClick={clearForm}><i><IconRefresh /></i> Reset</button>
        </div>
      </form>
    )
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeStatus: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}
