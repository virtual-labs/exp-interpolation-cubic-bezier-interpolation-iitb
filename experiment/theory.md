<p>&emsp; We discuss Bezier curves first. Bezier curves are named after the French engineer P. Bezier of the Renault Automobile Company. He developed them in the early 1960s to fill a need for curves whose shape can be readily controlled by changing a few parameters. Bezier's application was to construct pleasing surfaces for car bodies.</p>

<p>&emsp; Suppose we are given a set of control points, <i>P<sub>i</sub> = (x<sub>i</sub> , y<sub>i</sub>),  i = 0, 1, . . ., n.</i> (These points are also referred to as <i>Bezier points</i>.) Figure 1 is an example.</p>

<p>&emsp; These points could be chosen on a computer screen, using a pointing device. The points do not necessarily progress from left to right. We treat the coordinates of each point as a two-component vector.</p>

$$ P_i = \begin{bmatrix}
   x_i \\ y_i
\end{bmatrix} $$

<p>The set of points, in parametric form, is</p>

$$ P(u) = \begin{bmatrix}
   x(u) \\ y(u)
\end{bmatrix}, \qquad 0 \le u \le 1. $$

<p>The n<sup>th</sup>-degree Bezier polynomial determined by n + 1 points is given by</p>

<img src="./images/image1.png" style="width:70%; margin-left:15%">

$$ \text{Figure 1} $$

<div style="width:90%; border:1px solid black; margin:auto;">
   $$
   P(u) = \sum_{i=0}^n\binom{n}{i}(1 - u)^{n-i}u^iP_i,
   $$
   <p>where</p>
   $$ 
      \binom{n}{i} = \frac{n!}{i!(n-i)!} $$
</div>

<br>

<p><i>P(u)</i> is actually a <i>Bernstein polynomial</i>. Bernstein showed in 1912 that a weighted sum of these polynomials will converge uniformly to any continuous function on the interval [0, 1] as <i>n</i> approaches infinity. (Maple knows the Bernstein polynomials. The command is in a library: 'bernstein'.)</p>

<p>&emsp; When <i>n</i> = 2, <i>P(u)</i> is a quadratic equation defined by three points, <i>p<sub>0</sub>, p<sub>1</sub>, and p<sub>2</sub></i> :</p>

$$
P(u) = (1)(1-u)^2p_0 + 2(1-u)(u)p_1 + (1)u^2p_2,
$$

<p>
   because, for <i>n</i> = 2 and <i>i</i> = 0,1,2, we have <span style="display:inline-block;">$$\binom{2}{0}=1$$</span>, <span style="display:inline-block;">$$\binom{2}{1}=2$$</span>, <span style="display:inline-block;">$$\binom{2}{2}=1$$</span>. The preceding equation represents the pair of equations 
</p>

$$
\boxed{

   \begin{aligned}
      x(u) &= (1-u)^2x_0 + 2(1-u)ux_1 + u^2x_2, \\ 
      y(u) &= (1-u)^2y_0 + 2(1-u)uy_1 + u^2y_2.
   \end{aligned}
}
$$

<p>Obserye that, if <i>u</i> = 0, <i>x</i>(0) is identical to <i>x<sub>0</sub></i> and similarly for <i>y</i>(0). If <i>u</i> = 1, the point referred to is <i>(x<sub>2</sub>,y<sub>2</sub>)</i>. As <i>u</i> takes on values between 0 and 1, a curve is traced that goes from the first point to the third of the set. Ordinarily the curve will not pass through the central point of the three. (If the points are collinear, the curve is the straight line through them all.) In effect, the points of the second-degree Bezier curve have coordinates that are weighted sums of the coordinates of the three points that are used to define it. From another point of view, one can think of the Bezier equations as weighted sums of three polynomials in <i>u</i>, where the weighting factors are the coordinates of the three points.</p>

<p>&emsp; In one of the exercises, you are to find the Bezier curve for seven points, with <i>(x(0), y(0)) = P<sub>0</sub>, (x(1), y(1)) = P<sub>3</sub>, and (x(2),y(2)) = P<sub>6</sub></i>.
</p>

<p>&emsp; Applying the general defining equation for <i>n</i> = 3, we get the cubic Bezier polynomial that we now consider in some detail. The properties of other Bezier polynomials are the same as for the cubic. Here is the Bezier cubic:</p>

$$
\boxed{
   \begin{aligned}
      x(u) &= (1-u)^3x_0 +3(1-u)^2ux_1 + 3(1-u)u^2x_2 + u^3x_3, \\
      y(u) &= (1-u)^3y_0 +3(1-u)^2uy_1 + 3(1-u)u^2y_2 + u^3y_3.
   \end{aligned}
}
$$

<p>&emsp; Observe again that <i>(x(0), y(0)) = p<sub>0</sub></i> and <i>(x(1),y(1)) = p<sub>3</sub></i> and that the curve will not ordinarily go through the intermediate points. As illustrated in the example curves in Figure 2, changing the intermediate "control" points changes the shape ofthe curve. The examples are in Figure 2a through e. The first three of these show Bezier curves defined by one group of four points.</p>

<br>

<img src="./images/image2.png" style="width:60%; margin-left:20%">

$$\text{Figure 2: Bezier curves defined by four and seven points}$$

<p>&emsp;Figure 2d and e demonstrate how cubic Bezier curves can be continued beyond the first set of four points; one just subdivides seven points (<i>p<sub>0</sub></i> to <i>p<sub>6</sub></i>) into two groups of four, with the central one (<i>p<sub>3</sub></i>) belonging to both sets. Figure 2e shows that <i>p<sub>2</sub>, p<sub>3</sub></i> and <i>p<sub>4</sub></i> must be collinear to avoid a discontinuity in the slope at <i>p<sub>3</sub></i>.</p>

<p>&emsp; It is of interest to list the properties of Bezier cubics:</p>

<div style="width:90%; border:1px solid black; margin:auto;">
   <ol type="1">
      <li>
         <i>P(0) = p<sub>0</sub>,&emsp; P(1) = p<sub>3</sub>.</i>
      </li>
      <li>
         Because <i>dx/du = 3(x<sub>1</sub> - x<sub>0</sub>) and dy/du = 3(y<sub>1</sub> - y<sub>0</sub>) at u = 0</i>, the slope of the curve at <i>u</i> = 0 is <i>dy/dx = (y<sub>1</sub> - y<sub>0</sub>)/(x<sub>1</sub> - x<sub>0</sub>)</i>, which is the slope of the secant line between <i>p<sub>0</sub> and p<sub>1</sub></i>. Similarly, the slope at <i>u</i> = 1 is the same as the secant line between the last two points. This is indicated in the figures by dashed lines.
      </li>
      <li>
         The Bezier curve is contained in the convex hull determined by the four points.
      </li>
   </ol>
</div>

<br>

<p>&emsp; The <i>convex hull</i> of a set of points is the smallest convex set that contains the points. A set, <i>C</i>, is <i>convex</i> if and only if the line segment between any two points in the set lies entirely in set <i>C</i>. The following sketches show examples of the convex hull of four points.</p>

<img src="./images/image3.png" style="width:70%; margin-left:10%">

<br>

<p>&emsp; It is often convenient to represent the Bezier curve in matrix form. For Bezier cubics, this is</p>

$$
\begin{aligned}
   P(u) &= \begin{bmatrix}
      u^3, & u^2, & u, & 1
   \end{bmatrix}
   \begin{bmatrix}
      -1 & 3 & -3 & 1 \\
      3 & -6 & 3 & 0 \\
      -3 & 3 & 0 & 0 \\
      1 & 0 & 0 & 0
   \end{bmatrix}
   \begin{bmatrix}
      p_0 \\ p_1 \\ p_2  \\ p_3
   \end{bmatrix} \\ \\
   &= u^TM_2p.
\end{aligned}
$$

<script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
      </script>

   <script>
      setTimeout(() => {
         MathJax.typeset();
      }, 800);
   </script>