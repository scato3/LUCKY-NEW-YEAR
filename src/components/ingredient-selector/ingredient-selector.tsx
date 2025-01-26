import Image, { StaticImageData } from 'next/image';
import styles from './ingredient-selector.module.scss';

interface Ingredient {
  id: string;
  name: string;
  image: StaticImageData;
}

type SelectionType = 'yuksu' | 'main' | 'sub' | 'garnish';

const MAX_SELECTIONS: Record<SelectionType, number> = {
  yuksu: 1,
  main: 2,
  sub: 2,
  garnish: 3,
};

interface IngredientSelectorProps {
  ingredients: readonly Ingredient[];
  onSelect?: (id: string) => void;
  selectedIds?: string[];
  type: SelectionType;
}

export default function IngredientSelector({
  ingredients,
  onSelect,
  selectedIds = [],
  type,
}: IngredientSelectorProps) {
  const handleClick = (id: string) => {
    if (!onSelect) return;
    onSelect(id);
  };

  return (
    <div className={styles.container}>
      <p className={styles.notice}>* {MAX_SELECTIONS[type]}개 선택 가능</p>
      <div className={styles.grid}>
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className={`${styles.item} ${
              selectedIds.includes(ingredient.id) ? styles.selected : ''
            }`}
            onClick={() => handleClick(ingredient.id)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={60}
                height={60}
              />
            </div>
            <span>{ingredient.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
