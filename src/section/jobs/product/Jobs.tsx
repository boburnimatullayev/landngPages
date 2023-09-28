import { Column, Row } from "@/styles/style-components/flex-layout.s";
import { FC } from "react";
import Link from "next/link";
import {

  JobsWrapTitle,
  ProductCity,
  ProductDis,
  ProductItemRow,
  ProductTitle,
} from "./jobs.s";
import { mockProduct } from "@/mock";
import { Button } from "@/components";

interface IProductJobsProps {}

interface IProductProps {
  id?: number;
  productTitle?: string;
  city?: string;
  jobTime?: string;
  productDis?: string;
}

export const ProductJobs: FC<IProductJobsProps> = ({}) => {
  return (
    <Column gap={48} direction="column">
      <JobsWrapTitle>Product</JobsWrapTitle>
      {mockProduct.map((item: IProductProps, index: number) => (
        <>
          <ProductItemRow key={index} direction="row" gap={48} items="center">
            <Row direction="column" difference={24} size={10}>
              <ProductTitle>{item.productTitle}</ProductTitle>
              <ProductCity>
                {item.city} | <span> {item.jobTime}</span>
              </ProductCity>
              <ProductDis>{item.productDis}</ProductDis>
            </Row>
            <Row difference={24} size={2}>
              <Link href={`/jobs/${item.id}`}><Button variant="outlined">Apply Now</Button></Link>
            </Row>
          </ProductItemRow>
        </>
      ))}
    </Column>
  );
};
