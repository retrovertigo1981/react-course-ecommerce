import { useContext } from "react";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import EmptySearchResult from "../../Components/EmptySearchResult";

function Home() {
  const context = useContext(EcommerceContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else if (context.filteredItemsByCategory?.length > 0 ) {
      return context.filteredItemsByCategory?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  const renderEmptySearch = () => {
    if (
      context.filteredItems?.length === 0 &&
      context.searchByTitle?.length > 0
    ) {
      return <EmptySearchResult />;
    }
  };

  const renderInput = () => {
    if (!context.filteredItemsByCategory) {
      return (
        <div className="w-80 h-11 relative mb-6">
          <input
            className=" rounded-lg border border-gray-300 w-full h-full p-2 focus:outline-none"
            type="text"
            placeholder="Search a Product"
            value={context.searchByTitle}
            onChange={(event) => context.handleSearchByTitle(event)}
          />
          <span className="absolute top-[50%] translate-y-[-50%] right-2">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
          </span>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80">
        <h1 className="text-lg font-bold mb-6">Exclusive Products</h1>
      </div>
      {renderInput()}
      {renderEmptySearch()}
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
    </Layout>
  );
}

export default Home;
