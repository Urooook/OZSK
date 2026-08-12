import Image from 'next/image';
interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCard({ title, location, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 0vw, 20vw"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink leading-snug">{title}</p>
        <p className="text-xs text-muted mt-1">{location}</p>
      </div>
    </div>
  );
}
