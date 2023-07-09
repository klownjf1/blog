// Record обозначает что в качестве ключа будет string а в качестве значения boolean либо string
export type Mods = Record<string, boolean | string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {

    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}

/*
// remove-btn hovered selectable pdg
classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])

*/
