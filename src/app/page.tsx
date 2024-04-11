import { getAllFilters, getProducts } from "@/apis";
import { FilterForm, Header, Modal, ProductList } from "@/components";
import { SHOW_FILTER_PARAM_NAME, parseFilterValues } from "@/utils";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./page.module.scss";

type Props = {
  searchParams?: Record<string, string>;
};

export default async function Home({ searchParams }: Props) {
  const apiSearchParams = new URLSearchParams();

  if (searchParams?.["filters"]) {
    const filters = Object.entries(
      parseFilterValues(searchParams?.["filters"])
    );

    for (const [filterCode, { value: values, type }] of filters) {
      if (type && type === "range") {
        apiSearchParams.append(filterCode, `${values[0]},${values[1]}`);
      } else {
        for (const value of values) {
          apiSearchParams.append(`${filterCode}[]`, value);
        }
      }
    }
  }

  const { items: products } = await getProducts(apiSearchParams);
  const { filters: allFilters } = await getAllFilters();
  const showFilterDialog = searchParams?.[SHOW_FILTER_PARAM_NAME] === "true";

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <h2 className={styles.heading}>Sports Nutrition</h2>
          <Link
            className={styles.filter}
            href={`?${new URLSearchParams({
              ...searchParams,
              [SHOW_FILTER_PARAM_NAME]: "true",
            })}`}
          >
            <FaFilter className={styles.icon} />
            Show Filter
          </Link>
        </div>
        <ProductList products={products} />
      </main>
      <Modal
        title="Filters"
        show={showFilterDialog}
        closeButton={
          <Link
            className={styles.close}
            href={`?${new URLSearchParams({
              ...searchParams,
              [SHOW_FILTER_PARAM_NAME]: "false",
            })}`}
          >
            <IoMdClose />
          </Link>
        }
      >
        <FilterForm filters={allFilters} />
      </Modal>
    </>
  );
}
