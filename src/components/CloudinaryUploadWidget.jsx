import { useRef, useState } from "react";

const CloudinaryUploadWidget = () => {
  const [imgURL, setImgURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const cloudName = "hzxyensd5";
  const uploadPreset = "aoh4fpwm";

  const uwConfig = {
    cloudName,
    uploadPreset,
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uwConfig.uploadPreset);
      formData.append("cloud_name", uwConfig.cloudName);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${uwConfig.cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.public_id && data.secure_url) {
        console.log(data.secure_url);
        setImgURL(data.secure_url);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const fileInput = fileInputRef.current;
      if (fileInput) {
        // Create a new FileList-like object
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);
        fileInput.files = dataTransfer.files;

        // Trigger the onChange event
        const event = new Event("change", { bubbles: true });
        fileInput.dispatchEvent(event);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="relative border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100 h-80 overflow-hidden"
    >
      {imgURL ? (
        <img
          src={imgURL}
          alt="Uploaded"
          className="absolute w-full h-full object-cover"
        />
      ) : null}

      <div className="relative z-10 flex flex-col items-center gap-2">
        {isUploading ? (
          <span className="text-gray-500">Uploading...</span>
        ) : (
          !imgURL && (
            <span className="text-gray-500 text-sm">
              Choose a file or drag and drop it here
            </span>
          )
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
          disabled={isUploading}
        />
      </div>
    </div>
  );
};

export default CloudinaryUploadWidget;