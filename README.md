# 1. 팀 소개

---

<aside>

👉 팀 코너

<aside>

```
 ${유능하고} ${멋있는} ${풀스택} 개발자가 되고 싶은 `백민석`

 ${창의적이고} ${기발한} ${백엔드 마스터}가 되고 싶은 `이지현`

 ${도전하고} ${꿈꾸는} ${풀스택} 개발자가 되고 싶은 `최규선`

 $[성장하고] ${나아가는} ${풀스택} 개발자가 되고 싶은 `조은지`

 ${잘먹고} ${잘자는} ${풀스택} 개발자가 되고 싶은 `조민재`
```

</aside>

# 2. 서비스 소개

---

### 우리 서비스의 핵심 강점을 강조하여, 소개 문구를 작성합니다

<aside>
👉 누가 와도 뭐 하는 사이트인지 바로 알 수 있는 직관적인 UI와 사용자 입장에서 간편한 서비스

</aside>

### 제공하는 메인 서비스를 소개해주세요

<aside>
👉 생활용품 구매 (회원가입, 로그인, 장바구니)

</aside>

### 페이지네이션을 적용할 페이지에 삽입해야 할 코드

<aside>

const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [searchParams, setSearchParams] = useSearchParams();
const page = searchParams.get('page');

useEffect(() => {

fetch(`http://127.0.0.1:3000/products/list?cate=1&page==1`, {
method: 'GET',
})
.then(res => res.json())
.then(data => setProducts(data.data));
}, []);

useEffect(() => {

fetch(`http://10.58.7.174:3000/?page=${page}`, {
method: 'GET',
})
.then(res => res.json())
.then(data => setProducts(data.data));
}, [page]);

<Pagination
  products={products}
  currentPage={currentPage}
  changeCurrentPage={setCurrentPage}
  paramsSave={setSearchParams}
/>;

</aside>
