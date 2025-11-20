import type { RecipeVariants, RuntimeFn } from '@vanilla-extract/recipes';
import type { typography } from '@shared/styles/typography.css.ts';

type AnyVariants = Record<string, Record<string, string>>;
/**
 * recipe로 생성한 스타일 함수(RuntimeFn)의 Variant 등을
 * 컴포넌트 props에서 선택적으로 사용할 수 있도록 만드는 유틸 타입입니다.
 * 예: PartialVariants<typeof buttonBase> →
 *   { status?: ..., variant?: ..., radius?: ... }
 */
export type PartialVariants<T extends RuntimeFn<AnyVariants>> = Partial<RecipeVariants<T>>;

/**
 * typography style variants로 생성된 모든 타이포그래피 키의 타입입니다.
 * 여러 컴포넌트의 font prop에 사용되며,
 * typography['head_b+24'] 같은 className 변환에 사용합니다.
 */
export type TypographyVariants = keyof typeof typography;
