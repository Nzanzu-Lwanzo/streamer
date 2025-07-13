export default async function () {
  try {
    const response = await fetch(document.location.href + "/stream", {
      method: "GET",
      headers: {
        Accept: "application/octet-stream",
      },
    });

    return response.body;
  } catch (e) {
    console.warn(`>>> Error when requesting the image stream : ${e.message}`);
  }
}
