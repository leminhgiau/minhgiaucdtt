<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $products],
            200
        );

    }
    public function index_all($limit){
        $products = Product::limit($limit)->get();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $products],
            200
        );

    }
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $product],
            200
        );
    }
    public function store(Request $request)
    {
        $product = new Product();
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        $product->price_sale = $request->price_sale; //form
        $product->qty = $request->qty;
        //$product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        
        $product->detail = $request->detail; //form
        $product->metekey = $request->metekey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->create_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        $product->price_sale = $request->price_sale; //form
        $product->qty = $request->qty;
        //$product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        
        $product->detail = $request->detail; //form
        $product->metekey = $request->metekey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->create_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
    public function product_list($limit, $product_id = 0, $status = 1)
    {
        $listid = array();
        array_push($listid, $product_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $product_id + 0],
            ['status', '=', $status]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', $status]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $data = Product::where('status', '=', $status)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json($data, 200);
    }
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $products = Product::where('status','=',1)
            ->whereIn('category_id',$listid)
            ->orderBy('created_at','DESC')->limit($limit)->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    public function product_detail($slug){
        $product = Product::where([['slug','=',$slug],['status','=',1]])->first();
        if($product==null){
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'product' => null
                ],
                404
            );
        }
        $listid = array();
        array_push($listid, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=', $product->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=',1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2)>0){
                    foreach($list_category2 as $row2){
                        array_push($listid,$row2->id);
                    }
                }
            }
        }
        $product_other = Product::where([['id','!=',$product->id],['status','=',1]])
        ->whereIn('category_id',$listid)
        ->orderby('created_at','DESC')
        ->limit('8')
        ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'product' => $product,
                'product_other' => $product_other
            ],
            200
        );
    }
    public function destroy($id)
    {
        $product=Product::find($id);
        if($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Xóa dữ liệu không thành công', 'data' => null],
                404
            );
        }
        $product->delete();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $product],
            200
        );
    }
    public function product_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    
    
}
