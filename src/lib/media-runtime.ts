export async function uploadMedia(file: File) {
  return {
    id: crypto.randomUUID(),
    filename: file.name,
    uploaded: true,
    createdAt: new Date().toISOString(),
  };
}
