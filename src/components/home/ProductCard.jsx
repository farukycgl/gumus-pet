import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ name, image, price, oldPrice, description, id }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition rounded-lg cursor-pointer">
      <CardActionArea component={Link} to={`/products/${id}`}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={name}
          className="object-cover"
        />

        <CardContent>
          <Typography variant="h6" className="font-semibold mb-1">
            {name}
          </Typography>

          {description && (
            <Typography variant="body2" color="text.secondary" className="mb-2">
              {description}
            </Typography>
          )}

          <div className="flex items-center gap-3">
            {oldPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                className="line-through"
              >
                {oldPrice} TL
              </Typography>
            )}

            <Typography variant="h6" className="text-rose-600 font-bold">
              {price} TL
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
