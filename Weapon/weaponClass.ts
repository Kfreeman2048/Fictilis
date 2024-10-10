class weaponClass {
    constructor (
        public id: number,
        private weaponName: string,
        public tags: string[],
        private wDamage: number,
        private basicAttacks: Array<string>,
    ) {}
};
export default weaponClass;
