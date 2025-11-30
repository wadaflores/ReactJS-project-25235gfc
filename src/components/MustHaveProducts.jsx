import ProductsList from './ProductsList';

const MustHaveProducts = () => {
    return (
        <div>
            <ProductsList mockApi limit={4} showFilters={false} />
        </div>

    );
};

export default MustHaveProducts;