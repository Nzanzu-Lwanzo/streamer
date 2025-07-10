export default async function () {
  try {
    const response = await fetch(`${document.location.href}/stream`, {
      method: "GET",
      headers: {
        Accept: "applicatin/octet-stream",
      },
    });

    const reader = response.body.getReader();
    const result = await reader.read();

    while (result.value) {
      const buffer = result.value.buffer;
      const text = new TextDecoder().decode(buffer);
      console.log(text);

      if (result.done) break;
    }
  } catch (e) {
    console.warn(`>>> Error when requesting the stream : ${e.message}`);
  }
}
