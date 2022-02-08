import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dg9hg5urc",
  api_key: "556168464435387",
  api_secret: "L91LkBqLkUNmTMxGGSvDEtHx50I",
});

describe("Pruebas en fileUpload", () => {
  test("debe de cargar un archivo y retornar el url", async () => {
    const response = await fetch(
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    );
    const blob = await response.blob();
    const file = new File([blob], "foto.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");
    await cloudinary.v2.api.delete_resources(imageId, {}, (error, result) => {
      if (error) throw error;
    });
  });
  test("debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
