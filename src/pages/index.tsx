import {PageWrapper} from "@/shared/lib/page-wrapper/page-wrapper";
import {Search} from "@/entities/ui/search/search";

// todo-  eslint  - удалить комменты seo
// todo - импорты по FSD  -warning console - Skeleton переделать - aria -
// если карточек больше 2 то отдельный им размер + размер карточек и на 4 символ запрос

const HomePage = () => {
  return (
    <PageWrapper>
      <Search/>
    </PageWrapper>);
};

export default HomePage;


