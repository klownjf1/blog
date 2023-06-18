// Record обозначает что в качестве ключа будет string а в качестве значения boolean либо string
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([_, className]) => className),
    ].join(' ');
}

/*
// remove-btn hovered selectable pdg
classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])

*/
