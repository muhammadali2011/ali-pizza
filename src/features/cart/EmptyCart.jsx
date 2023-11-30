import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Menyuga qaytish</LinkButton>

      <p className="mt-7 font-semibold">
      Savatingiz hali ham bo'sh. Bir nechta Pitsalarni qo'shishni boshlang :)
      </p>
    </div>
  );
}

export default EmptyCart;
