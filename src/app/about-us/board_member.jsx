import Image from "next/image";

export default function BoardMember({ name, position, image }) {
  return (
    <a
      href="#"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-xl font-semibold">{name}</h2>
      <h3 className="mb-3 text-m font-light italic">{position}</h3>
      {/* Square Image Container */}
      <div className="relative w-40 h-40 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${name} - Board Member`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </a>
  );
}