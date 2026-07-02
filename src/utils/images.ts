const images = import.meta.glob("../assets/images/*.jpg", {
	eager: true,
	import: "default",
}) as Record<string, string>;

export function resolveImage(jsonPath: string): string {
    const key = jsonPath.replace('./assets/images/', '../assets/images/')
    return images[key]
}