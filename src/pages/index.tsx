import {Jokes} from "@/entities/jokes/jokes";
import {PageWrapper} from "@/shared/lib/page-wrapper/page-wrapper";

// todo-  eslint  - удалить комменты seo
// todo - импорты по FSD  -warning console - Skeleton переделать -

const HomePage = () => {
  return (
    <PageWrapper>
      <Jokes/>
    </PageWrapper>);
};

export default HomePage;


