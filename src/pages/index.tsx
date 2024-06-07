import {PageWrapper} from "@/shared/lib/page-wrapper/page-wrapper";
import {Jokes} from "@/entities/ui/jokes/jokes";

// todo-  eslint  - удалить комменты seo
// todo - импорты по FSD  -warning console - Skeleton переделать - aria -
// если карточек больше 2 то отдельный им размер + плеисхолдер сделать + при обновлении страницы фокус в инпуте

const HomePage = () => {
  return (
    <PageWrapper>
      <Jokes/>
    </PageWrapper>);
};

export default HomePage;


