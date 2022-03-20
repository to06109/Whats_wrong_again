package dev.wwa.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter @Setter
public class Comments {

    @Id @GeneratedValue
    @Column(name = "comment_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    @NotNull
    private Posts post;

    @NotNull
    private Long editor_id;

    @NotNull
    private LocalDateTime edit_date;

    private Long ori_comment;

    @NotNull
    private String contents;

    private Long report_no;

    @OneToMany
    @JoinColumn(name = "comment_post")
    private List<Report> reports = new ArrayList<>();

}
