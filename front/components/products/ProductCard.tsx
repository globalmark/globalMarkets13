import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
  Button,
} from "@mui/material";

import { IProduct } from "../../interfaces";
import Image from "next/image";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const productImage = useMemo(() => {
    if (product._id) {
      return isHovered
        ? product.images[0]
        : !!product.images[1]
        ? product.images[1]
        : product.images[0];
    }
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product._id, product.images]);
  const details = product._id ? product._id : product.slug;
  //"https://meet.google.com/qwi-dxjo-ahy"
  const myLoader: any = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Card>
        <NextLink href={`/product/${details}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              {/*<CardMedia
                component="img"
                className="fadeIn"
                image={productImage}
                alt={product.title}
                width={420}
                height={450}
            />*/}

              <Image
                loader={myLoader}
                src={productImage}
                alt="imagenes de los productos"
                width={500}
                height={600}
                priority={true}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
