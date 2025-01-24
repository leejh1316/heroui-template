import { useEffect, useRef, useState } from "react";
/**
 *
 * ### 예제
 * ```tsx
 * function Example(){
 *  const intersectionOption = {
 *    threshold: 0.25
 *  }
 *  const [refElement, isVisible] = useIntersection(intersectionOption)
 *
 *  return <div ref={refElement} className={`${isVisible && 'visible'}`}>visible</div>
 * }
 * ```
 *
 * `intersectionOptions`
 *
 * Intersection Observer API에서 타겟 요소의 가시성을 감지하기 위한 설정 옵션입니다.
 *
 *  `root` - 타겟 요소의 가시성을 확인할 때 사용되는 루트 요소입니다.
 * - 이 요소는 타겟 요소의 상위 조상 요소이어야 합니다.
 * - 기본값은 `null`이며, 이 경우 브라우저의 뷰포트(Viewport)가 루트 요소로 사용됩니다.
 *
 * `rootMargin`- 루트 요소의 범위를 확장하거나 축소할 수 있는 margin 값입니다.
 * - CSS의 `margin`과 유사하게 `top`, `right`, `bottom`, `left`의 값을 설정할 수 있습니다.
 * - 기본값은 `"0px"`이며, 단위를 반드시 포함해야 합니다 (예: `"10px"`, `"5%"`).
 * - 예: `rootMargin: "10px 20px 10px 20px"`.
 *
 * `threshold` - 타겟 요소의 가시성 비율에 따라 콜백이 호출되는 기준입니다.
 * - 단일 숫자 또는 숫자 배열로 설정할 수 있습니다.
 * - 예:
 *   - `0.5`: 타겟 요소가 50% 보일 때 콜백이 실행됩니다.
 *   - `[0, 0.25, 0.5, 0.75, 1]`: 가시성이 0%, 25%, 50%, 75%, 100%로 변경될 때마다 콜백이 실행됩니다.
 * - 기본값은 `0`입니다.
 *
 */
function useIntersection(intersectionOptions?: IntersectionObserverInit) {
  const refElement = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!refElement.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
    }, intersectionOptions);
    observer.observe(refElement.current);
    return () => observer.disconnect();
  }, []);

  return [refElement, isVisible];
}

export default useIntersection;
