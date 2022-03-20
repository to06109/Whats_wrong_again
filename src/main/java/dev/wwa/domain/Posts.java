package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter @Setter
public class Posts {

    @Id @GeneratedValue
    @Column(name = "post_id")
    private Long id;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    @NotNull
    private Category category;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    @NotNull
    private Member member;

    @NotNull
    private LocalDateTime edit_date;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "attached_group_id")
    private AttachedGroup attached_group;

    private String error_category;

    private String error_name;

    private String report_category;

    private String title;

    private String contents;

    private Long solution_no;

    private Long scrape_no;

    private Long report_no;

    private Long recommend_no;

    @OneToMany
    @JoinColumn(name = "post")
    private List<Debate> debates = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "post")
    private List<Comments> comments = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "post_post")
    private List<Report> reports = new ArrayList<>();

}
