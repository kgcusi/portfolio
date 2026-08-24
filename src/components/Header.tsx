import { profile } from '../data/profile';
import Avatar from '../assets/karl-avatar.webp';

export default function Header() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
        <img
          /* Decorative: the h1 beside it already announces the name. */
          alt=""
          src={Avatar}
          width={224}
          height={224}
          className="h-16 w-16 shrink-0 rounded-full ring-4 ring-accent lg:h-20 lg:w-20"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-ink lg:text-[1.75rem]">
            {profile.name}
          </h1>
          <p className="text-sm font-semibold text-accent-ink">{profile.role}</p>
        </div>
      </div>

      <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink-body">
        {profile.pitch}
      </p>

      {profile.availability.open && (
        <p className="flex w-fit items-center gap-2 rounded-full bg-accent-wash px-3 py-1.5 text-2xs font-semibold uppercase text-accent-ink">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-ink opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-ink" />
          </span>
          {profile.availability.label}
        </p>
      )}
    </div>
  );
}
