import { useState } from "react";
function App() {
  const [preview, setPreview] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(event.target.files[0]);
  };
  return (
    <div>
      <div>
        <img
          style={{ width: "300px", objectFit: "cover", borderRadius: "4px" }}
          src={preview === null ? "" : URL.createObjectURL(preview)}
          alt=""
        />
      </div>
      <form>
        <input type="file" id="file" onChange={handleChange} />
        <label htmlFor="file">
          <span>upload image</span>
          <img src="https://img.icons8.com/parakeet/2x/add-image.png" alt="" />
        </label>
      </form>
    </div>
  );
}

export default App;
