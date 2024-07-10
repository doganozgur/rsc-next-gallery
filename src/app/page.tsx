import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/1d2bda39-34e4-4a0c-98bb-294b18347b4d-mpest.jpg",
  "https://utfs.io/f/33c77fb4-50a6-4197-8ebd-fae8495bcc12-d0jy1x.gif",
  "https://utfs.io/f/418a1cb1-52ad-442b-88a8-f5d57b7d3846-hjw5.webp",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages]?.map((image) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt="dummy"
              width={200}
              height={160}
              style={{ objectFit: "cover", aspectRatio: "1/1" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
