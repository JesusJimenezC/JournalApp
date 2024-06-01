export const fileUpload = async (file: File): Promise<string> => {
  if (file === null) throw new Error('No file provided');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dpcyr8isl/image/upload';
  const formData = new FormData();

  formData.append('upload_preset', import.meta.env.VITE_CB_UPLOAD_PRESET);
  formData.append('file', file);

  try {
    const response = await fetch(cloudUrl, {
      body: formData,
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error uploading file');
    }

    const cloudResponse = await response.json();

    return cloudResponse.secure_url;
  } catch (error) {
    throw new Error('Error post file');
  }
};
