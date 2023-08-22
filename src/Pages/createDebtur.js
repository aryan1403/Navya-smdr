import './createDebtur.css';

export default function CreateDebtur() {
  return (
    <>
    <div className='createDebturForm'>
      <h3>Create Debtur</h3>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Debtur Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Debtur Description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <div class="dropdown">
        <button id='bondissuesbtn' type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Bond Issues
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Term Bonds</a></li>
            <li><a class="dropdown-item" href="/">Dev Bonds</a></li>
            <li><a class="dropdown-item" href="/">Corporate Bonds</a></li>
            <li><a class="dropdown-item" href="/">High yield Bonds</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Others</a></li>
        </ul>
        </div>
        <button id='submit' type="button" class="btn btn-success">
            Submit
        </button>
      </div>
    </div>
    </>
  );
}
